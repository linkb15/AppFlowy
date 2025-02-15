import { Database } from '$app/interfaces/database';
import { DatabaseLayoutPB } from '@/services/backend';
import { RefObject, createContext, createRef } from 'react';
import { proxy } from 'valtio';

export const VerticalScrollElementRefContext = createContext<RefObject<Element>>(createRef());
export const DatabaseContext = createContext<Database>(proxy({
  id: '',
  viewId: '',
  name: '',
  fields: [],
  rows: [],
  layoutType: DatabaseLayoutPB.Grid,
  layoutSetting: {},
  isLinked: false,
}));
