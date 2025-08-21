import { useEffect, useState } from "react";
import { type GetPursuitDto, type IPursuit } from "../interfaces/pursuits";

interface UsePursuitsOptions {
  initialPage?: number;
  initialLimit?: number;
}

interface PursuitsState {
  pursuits: IPursuit[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  totalPages: number;
  totalCount: number;
}

export function usePursuits({ initialPage = 1, initialLimit = 3 }: UsePursuitsOptions = {}) {
  const [state, setState] = useState<PursuitsState>({
    pursuits: [],
    loading: true,
    error: null,
    page: initialPage,
    limit: initialLimit,
    totalPages: 0,
    totalCount: 0,
  });

  useEffect(() => {
    async function fetchPursuits() {
      setState(prev => ({ ...prev, loading: true, error: null }));

      try {
        const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";
        const res = await fetch(`${API_BASE}/pursuits?page=${state.page}&limit=${state.limit}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        const data: GetPursuitDto = await res.json();
        setState(prev => ({
          ...prev,
          pursuits: data.pursuits,
          page: data.page,
          totalPages: data.totalPages,
          totalCount: data.totalCount,
          loading: false,
        }));
      } catch (err) {
        console.error(err);
        setState(prev => ({ ...prev, error: "Failed to load pursuits", loading: false }));
      }
    }

    fetchPursuits();
  }, [state.page, state.limit]);

  const setPage = (page: number) => setState(prev => ({ ...prev, page }));
  const setLimit = (limit: number) => setState(prev => ({ ...prev, limit }));

  return { ...state, setPage, setLimit };
}
