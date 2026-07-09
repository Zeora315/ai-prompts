// Learn how to customize the theme: https://rspress.rs/guide/basic/custom-theme
import './index.css';
import { Layout as BasicLayout, Banner } from '@rspress/core/theme-original';

const Layout = (props: any) => {
  return (
    <BasicLayout
      {...props}
      beforeNav={
        <Banner
          href="/quick-start"
          message="🚀 精选 AI 提示词已上线：覆盖内容创作、学术研究、办公提效等场景，持续更新中！"
        />
      }
    />
  );
};

export * from '@rspress/core/theme-original';
export { Layout };
