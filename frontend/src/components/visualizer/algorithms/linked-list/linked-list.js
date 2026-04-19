// visualizer/algorithms/linked-list/linked-list.js

export function generateLinkedListSteps(type, operations) {
  const steps = [];

  let list = [];

  const clone = () => [...list];

  operations.forEach((op) => {
    const { action, value } = op;

    // ======================
    // INSERT
    // ======================

    if (action === 'insert') {
      list.push(value);

      steps.push({
        list: clone(),
        action: `Inserted ${value}`,
        highlightLine: 2,
      });
    }

    // ======================
    // DELETE
    // ======================

    if (action === 'delete') {
      const index = list.indexOf(value);

      if (index === -1) {
        steps.push({
          list: clone(),
          action: `${value} not found`,
          highlightLine: 8,
        });
      } else {
        list.splice(index, 1);

        steps.push({
          list: clone(),
          action: `Deleted ${value}`,
          highlightLine: 9,
        });
      }
    }

    // ======================
    // SEARCH
    // ======================

    if (action === 'search') {
      let found = false;

      for (let i = 0; i < list.length; i++) {
        steps.push({
          list: clone(),
          currentIndex: i,
          action: `Checking ${list[i]}`,
          highlightLine: 14,
        });

        if (list[i] == value) {
          found = true;

          steps.push({
            list: clone(),
            currentIndex: i,
            action: `Found ${value}`,
            highlightLine: 15,
          });

          break;
        }
      }

      if (!found) {
        steps.push({
          list: clone(),
          action: `${value} not found`,
          highlightLine: 16,
        });
      }
    }
  });

  return steps;
}
