import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { curriculumData } from '../../data/curriculum-data';
import AlgorithmFrame from '../../components/algorithm/algorithm-frame';
import { useAuthStore } from '../../store/auth.store';
import { trackActivity } from '../../services/activity.service';

export default function AlgorithmPage() {
  const { categoryId, algoId } = useParams();
  const { user } = useAuthStore();

  // ================= SCROLL FIX =================
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categoryId, algoId]);

  // ================= TRACK =================
  useEffect(() => {
    if (!user) return;

    const key = `visited-${algoId}`;
    const visited = sessionStorage.getItem(key);

    if (!visited) {
      trackActivity(user.id, 'curriculum');
      sessionStorage.setItem(key, 'true');
    }
  }, [algoId, user]);

  // ================= FIND CATEGORY =================
  const category = curriculumData.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="pt-28 sm:pt-36 md:pt-40 text-center px-4">
        Category not found
      </div>
    );
  }

  // ================= FIND ALGO =================
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
    return (
      <div className="pt-28 sm:pt-36 md:pt-40 text-center px-4">
        Algorithm not found
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <AlgorithmFrame algorithm={algorithm} />
    </div>
  );
}
