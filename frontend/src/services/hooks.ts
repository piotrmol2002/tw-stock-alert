import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from './api';

export function useInventory() {
  return useQuery({
    queryKey: ['inventory'],
    queryFn: async () => {
      const { data } = await api.get('/inventory');
      return data as Inventory[];
    },
  });
}

export function useSetInventory() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: { id: number; current_qty: number }) =>
      api.put(`/inventory/${payload.id}`, {
        product_id: payload.id,
        current_qty: payload.current_qty,
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['inventory'] }),
  });
}

export function useAlerts() {
  return useQuery({
    queryKey: ['alerts'],
    queryFn: async () => {
      const { data } = await api.get('/alerts');
      return data as Alert[];
    },
    refetchInterval: 10000, // odśwież co 10 s
  });
}

/* (TS interfaces) */
export interface Inventory {
  id: number;
  product_id: number;
  current_qty: number;
}

export interface Alert {
  id: number;
  product_id: number;
  qty: number;
  created_at: string;
  sent: boolean;
}
