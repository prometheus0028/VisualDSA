import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { curriculumData } from '../../data/curriculum-data';
import AlgorithmFrame from '../../components/algorithm/algorithm-frame';
import { useAuthStore } from '../../store/auth.store'; // ✅ NEW
import { trackActivity } from '../../services/activity.service'; // ✅ NEW

export default function AlgorithmPage() {
  const { categoryId, algoId } = useParams();
  const { user } = useAuthStore(); // ✅ NEW

  // ===============================
  // SCROLL TO TOP (FIX)
  // ===============================
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categoryId, algoId]);

  // ===============================
  // 🔥 TRACK CURRICULUM VIEW (ONCE)
  // ===============================
  useEffect(() => {
    if (!user) return;

    const key = `visited-${algoId}`;
    const visited = sessionStorage.getItem(key);

    if (!visited) {
      trackActivity(user.id, 'curriculum'); // 🔥 ADDED
      sessionStorage.setItem(key, 'true');
    }
  }, [algoId, user]);

  // ===============================
  // FIND CATEGORY
  // ===============================
  const category = curriculumData.find((c) => c.id === categoryId);

  if (!category) {
    return <div className="pt-40 text-center">Category not found</div>;
  }

  // ===============================
  // FIND ALGORITHM
  // ===============================
  let algorithm = null;

  if (category.algorithms) {
    algorithm = category.algorithms.find((a) => a.id === algoId);
  }

  if (!algorithm && category.subsections) {
    for (let sub of category.subsections) {
      const found = sub.algorithms?.find((a) => a.id === algoId);
      if (found) {
        algorithm = found;
        break;
      }
    }
  }

  if (!algorithm) {
    return <div className="pt-40 text-center">Algorithm not found</div>;
  }

  return <AlgorithmFrame algorithm={algorithm} />;
}
