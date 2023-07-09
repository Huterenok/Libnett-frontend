import React from 'react';
import styles from './FileInput.module.scss';

interface ImageUploaderProps {
  value: Blob | null | undefined;
  setValue: (v: Blob | null |undefined) => void;
  style?: React.CSSProperties;
}

const FileInput: React.FC<ImageUploaderProps> = ({ value, setValue, style }) => {
  return (
    <div className={styles.fileUploadCon} style={{ ...style }}>
      <label htmlFor="file">
        <p className={styles.label}>ADD COVER</p>
      </label>
      <input
        value={value ? '' : undefined}
        id="file"
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files != null) {
            setValue(e.target.files[0]);
          }
        }}
      />
      {value && (
        <div className={styles.row}>
          <p>{(value as File)?.name}</p>
          <button
            onClick={() => {
              setValue(null);
            }}>
            <p>Delete</p>
            <img src="/assets/icons/cross.svg" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FileInput;
