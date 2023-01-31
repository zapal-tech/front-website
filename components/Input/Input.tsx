import { Control, useController } from 'react-hook-form';

import styles from './Input.module.scss';

export type InputProps = {
  name: string;
  id: undefined;
  label: undefined;
  control: Control;
  autoComplete: string;
};

export type LabelInputProps = Omit<InputProps, 'id' | 'label'> & {
  id: string;
  label: string;
};

const TextField: React.FC<InputProps | LabelInputProps> = ({ name, id, label, control, autoComplete = 'off' }) => {
  const { field, fieldState } = useController({ control, name });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => field.onChange(evt.target.value);

  return (
    <div className={styles.Input}>
      {id && label && (
        <label className={styles.Input__Label} htmlFor={id}>
          {label}
        </label>
      )}

      <input {...field} id={id} autoComplete={autoComplete} onChange={handleChange} />

      {fieldState.error && <span className={styles.Input__Error}>{fieldState.error?.message}</span>}
    </div>
  );
};

export default TextField;
