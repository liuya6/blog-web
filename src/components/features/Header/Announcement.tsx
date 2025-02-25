const headerStyles = {
  announcement:
    "mx-auto max-w-6xl px-4 py-3 mt-2 text-sm text-gray-500 text-center md:text-left",
};

export function Announcement() {
  return (
    <div className={headerStyles.announcement}>近期公告：域名又要到期了</div>
  );
}
