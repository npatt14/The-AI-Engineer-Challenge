import { APP_TITLE } from "@/lib/copy";
import styles from "./MacWindow.module.css";

type Props = {
  children: React.ReactNode;
  status: string;
};

export function MacWindow({ children, status }: Props) {
  return (
    <div className={`mac-desktop ${styles.desktop}`}>
      <div className="mac-window-outer">
        <div className="mac-titlebar-active">
          <button type="button" className="mac-close-box" aria-label="Close" />
          <h1 className="mac-title-text">{APP_TITLE}</h1>
          <button type="button" className="mac-zoom-box" aria-label="Zoom" />
        </div>
        <div className="mac-window-body">
          {children}
          <div className="mac-grow-box" aria-hidden="true" />
        </div>
        <div className="mac-status-strip">{status}</div>
      </div>
    </div>
  );
}
