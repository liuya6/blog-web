import { Icon } from "@/components/ui/Icon";

const searchStyles = {
  root: "flex items-center h-search w-full justify-between",
  left: "text-sm text-gray-666",
  rightInput: "cursor-pointer flex items-center justify-center",
};

export function Search() {
  return (
    <div className={searchStyles.root}>
      <span className={searchStyles.left}>兴趣指引方向，会玩才会学</span>
      <div className={searchStyles.rightInput}>
        <Icon name="sousuo"></Icon>
        <input type="text" />
      </div>
    </div>
  );
}
