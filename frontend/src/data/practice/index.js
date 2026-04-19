// ================= IMPORT DATASETS =================

import searchingDataset from './searching';
import sortingDataset from './sorting';
import stackDataset from './stack';
import queueDataset from './queue';
import linkedListDataset from './linkedlist';
import treeDataset from './tree';
import graphDataset from './graph';
import dpDataset from './dp';

// ================= EXPORT MAP =================

export const practiceData = {
  searching: searchingDataset,
  sorting: sortingDataset,
  stack: stackDataset,
  queue: queueDataset,
  'linked-list': linkedListDataset,
  tree: treeDataset,
  graphs: graphDataset,
  'dynamic-programming': dpDataset,
};
