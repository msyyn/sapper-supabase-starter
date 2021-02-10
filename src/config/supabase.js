import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from './settings';

export const supabase = createClient(supabaseConfig.url, supabaseConfig.key, supabaseConfig.options);