import styles from './Avatar.module.css';

interface AvatarProps {
    src: string;
    hasBorder?: boolean;
}

export function Avatar({src, hasBorder = true}: AvatarProps) {
    return (
        <img className={hasBorder ? styles.avatar : styles.avatarNoBorder} src={src} alt={"Author"} />
    )
}