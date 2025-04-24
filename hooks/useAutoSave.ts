import { useEffect, useRef, useState } from 'react';

interface AutoSaveOptions<T> {
  data: T;
  onSave: (data: T) => Promise<void>;
  interval?: number;
  enabled?: boolean;
}

export function useAutoSave<T>({
  data,
  onSave,
  interval = 30000,
  enabled = true
}: AutoSaveOptions<T>) {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const savedData = useRef(data);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const hasChanged = JSON.stringify(data) !== JSON.stringify(savedData.current);

    if (hasChanged) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(async () => {
        try {
          setIsSaving(true);
          await onSave(data);
          savedData.current = data;
          setLastSaved(new Date());
          console.log('Auto-saved profile data');
        } catch (error) {
          console.error('Auto-save failed:', error);
        } finally {
          setIsSaving(false);
        }
      }, interval);
    }
  }, [data, onSave, interval, enabled]);

  const forceSave = async (): Promise<boolean> => {
    try {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      setIsSaving(true);
      await onSave(data);
      savedData.current = data;
      setLastSaved(new Date());
      return true;
    } catch (error) {
      console.error('Force save failed:', error);
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  return { forceSave, lastSaved, isSaving };
}
