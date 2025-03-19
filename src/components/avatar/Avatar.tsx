import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  alt: string;
}

export function Avatar({ hasBorder = true, alt, ...rest }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarNoBorder}
      alt={alt}
      {...rest}
    />
  );
}
