import { motion } from 'framer-motion';

export default function Heatmap({ data }) {
  // 🔥 FIX: SAFE DATE FORMAT (NO TIMEZONE BUG)
  const formatDate = (d) => {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      '0',
    )}-${String(d.getDate()).padStart(2, '0')}`;
  };

  // 🔥 BUILD CALENDAR GRID (MONTH + YEAR SAFE)
  const buildHeatmap = () => {
    const today = new Date();
    const todayStr = formatDate(today);

    const map = {};
    data.forEach((d) => {
      map[d.date] = d.count;
    });

    const months = {};
    const monthOrder = [];

    for (let i = 149; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);

      const dateStr = formatDate(d);

      // 🔥 FIX: include year
      const monthKey = `${d.getFullYear()}-${d.getMonth()}`;
      const monthLabel = d.toLocaleString('default', { month: 'short' });

      if (!months[monthKey]) {
        months[monthKey] = {
          label: monthLabel,
          days: [],
        };
        monthOrder.push(monthKey);
      }

      months[monthKey].days.push({
        date: dateStr,
        count: map[dateStr] || 0,
        day: (d.getDay() + 6) % 7,
        isToday: dateStr === todayStr,
      });
    }

    return monthOrder.map((key) => {
      const { label, days } = months[key];
      const weeks = [];
      let week = Array(7).fill(null);

      days.forEach((d) => {
        week[d.day] = d;

        if (d.day === 6) {
          weeks.push(week);
          week = Array(7).fill(null);
        }
      });

      if (week.some((x) => x !== null)) weeks.push(week);

      return { month: label, weeks };
    });
  };

  const monthGroups = buildHeatmap();

  // 🔥 BUILD FULL 150 DAY ARRAY (FOR STREAK FIX)
  const today = new Date();
  const map = {};
  data.forEach((d) => (map[d.date] = d.count));

  const fullDays = [];

  for (let i = 149; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);

    const dateStr = formatDate(d);

    fullDays.push({
      date: dateStr,
      count: map[dateStr] || 0,
    });
  }

  // 🔥 FIXED STREAK
  let currentStreak = 0;
  let longestStreak = 0;
  let temp = 0;

  fullDays.forEach((d) => {
    if (d.count > 0) {
      temp++;
      longestStreak = Math.max(longestStreak, temp);
    } else temp = 0;
  });

  currentStreak = temp;

  // 🔥 FIXED WEEKLY STATS
  const last7 = fullDays.slice(-7);
  const activeDays = last7.filter((d) => d.count > 0).length;
  const total = last7.reduce((sum, d) => sum + d.count, 0);

  // 🔥 AI INSIGHT
  const insight =
    currentStreak > 5
      ? '🔥 You are on fire! Keep the streak going.'
      : activeDays < 3
        ? '⚠ Your consistency dropped this week. Try solving at least 2 problems daily.'
        : '👍 Good progress! Increase intensity slightly to improve faster.';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* STATS */}
      <div className="flex justify-center gap-10 mb-10 text-center">
        <div>
          <p className="text-sm text-gray-500">Current Streak</p>
          <p className="text-xl font-bold">{currentStreak} days</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Longest Streak</p>
          <p className="text-xl font-bold">{longestStreak} days</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-8 text-center">
        Consistency Tracker
      </h2>

      <div className="flex justify-center gap-4">
        {/* DAY LABELS */}
        <div className="flex flex-col justify-between text-xs text-gray-500 mr-2">
          {['', 'Mon', '', 'Wed', '', 'Fri', '', 'Sun'].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        {/* GRID */}
        <div className="flex gap-3">
          {monthGroups.map((group, idx) => (
            <div key={idx}>
              <div className="text-xs text-center mb-2 text-gray-500">
                {group.month}
              </div>

              <div className="flex gap-1">
                {group.weeks.map((week, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    {week.map((day, j) => (
                      <div
                        key={j}
                        className={`w-4 h-4 rounded-sm ${
                          !day
                            ? 'bg-transparent'
                            : day.isToday
                              ? 'bg-green-700'
                              : day.count === 0
                                ? 'bg-gray-200 dark:bg-white/10'
                                : day.count < 3
                                  ? 'bg-green-300'
                                  : day.count < 6
                                    ? 'bg-green-500'
                                    : 'bg-green-700'
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LEGEND */}
      <div className="flex justify-center items-center gap-2 mt-6 text-xs text-gray-500">
        Less
        <div className="w-4 h-4 bg-gray-200 dark:bg-white/10"></div>
        <div className="w-4 h-4 bg-green-300"></div>
        <div className="w-4 h-4 bg-green-500"></div>
        <div className="w-4 h-4 bg-green-700"></div>
        More
      </div>

      {/* SUMMARY */}
      <div className="text-center mt-10 text-sm text-gray-500">
        This week: {activeDays} active days • {total} total activity
      </div>

      {/* AI INSIGHT */}
      <div className="text-center mt-6 text-purple-600 dark:text-purple-400 font-medium">
        {insight}
      </div>
    </motion.div>
  );
}
