import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import { Banner } from "@/components/features/Banner";
import { CardArticle, type CardArticleProps } from "@/components/ui/Card";

const HomeList: CardArticleProps[] = [
  {
    id: 1,
    title: "LocalSend：开源跨平台神器，局域网文件传输新选择",
    introduction:
      "ocalSend是一款专为局域网设计的开源文件传输工具，支持跨平台使用。它采用局域网直连传输方式，实现快速高效的文件传输，同时确保传输的安全性和可靠性。LocalSend简单易用，无需注册账号，非常适合在家庭或办公室的局域网内进行文件共享",
    tag: [
      {
        id: 1,
        name: "软件分享",
        type: "as",
      },
    ],
    img: "/img/test/1.webp",
    date: "2025/02/27 08:22",
  },
  {
    id: 2,
    title: "5G CPE使用体验：美碳C8-601",
    introduction:
      "美碳c8-601 5G CPE以其性价比吸引了众多目光。本文通过速率测试、游戏延迟体验及资费分析，全面评测了这款设备的表现。虽然宣传速度与实际体验有所差距，但对于特定人群来说，它依然是一个值得考虑的选择。",
    tag: [
      {
        id: 2,
        name: "技术评测",
        type: "j",
      },
    ],
    img: "/img/test/2.webp",
    date: "2025/01/20 07:22",
  },
  {
    id: 3,
    title: "主题文章格式演示",
    introduction: "本文是HarmonyHues主题文章格式演示",
    tag: [
      {
        id: 3,
        name: "个人日记",
        type: "g",
      },
    ],
    img: "/img/test/3.webp",
    date: "2025/01/18 20:53",
  },
  {
    id: 4,
    title: "好玩的Docker开源项目推荐：让你的服务器好玩又实用",
    introduction:
      "本文介绍了一系列好玩的Docker项目，包括支持多种存储的文件列表程序AList、隐私优先的思源笔记、定时任务管理平台青龙面板等。这些项目不仅功能强大，而且易于部署和使用，将为您的技术生活带来全新的体验。 ",
    tag: [
      {
        id: 4,
        name: "技术评测",
        type: "j",
      },
    ],
    img: "/img/test/4.webp",
    date: "2024/12/27 08:22",
  },
  {
    id: 5,
    title: "即时设计：在线设计SVG格式LOGO",
    introduction:
      "在这篇博客中，我分享了使用即时设计网站初体验设计SVG格式LOGO的过程。从选择模板到最终导出，即时设计提供了直观的界面和强大的功能，使得LOGO设计变得简单而有趣。无论你是设计新手还是寻求高效工具的专业人士，即时设计都值得一试。",
    tag: [
      {
        id: 5,
        name: "经验分享",
        type: "jy",
      },
    ],
    img: "/img/test/5.webp",
    date: "2024/12/17 18:22",
  },
  {
    id: 6,
    title: "Ollama+Open WebUI本地部署大模型",
    introduction:
      "本文提供了在 Windows 系统上部署 Ollama 和 Open WebUI 的完整指南，帮助用户轻松运行本地大模型。通过详细的步骤和注意事项，即使是初学者也能快速上手，享受离线 AI 的便利。",
    tag: [
      {
        id: 6,
        name: "AGI分享",
        type: "A",
      },
    ],
    img: "/img/test/6.webp",
    date: "2024/11/12 18:50",
  },
  {
    id: 7,
    title: "网站配置支持IPv6访问",
    introduction:
      "随着IPv6的普及，配置网站以支持IPv6访问已成为必要步骤。本文提供了一步步的指南，从检查网络环境到配置服务器和DNS记录，确保你的网站能够顺利支持IPv6访问。通过本文的指导，你可以轻松完成IPv6配置，提升网站的兼容性和访问体验。",
    tag: [
      {
        id: 7,
        name: "网站优化",
        type: "w",
      },
    ],
    img: "/img/test/7.webp",
    date: "2024/10/12 19:10",
  },
  {
    id: 8,
    title: "网站使用CSP策略：提升安全性与防御XSS攻击",
    introduction:
      "本文深入探讨了内容安全策略（CSP）在提升Web应用安全性方面的作用，包括CSP策略的基本原理、配置方法、实践优化以及效果与局限。通过合理配置CSP策略，网站可以有效防御XSS攻击，保障用户数据安全。",
    tag: [
      {
        id: 8,
        name: "网站优化",
        type: "w",
      },
    ],
    img: "/img/test/8.webp",
    date: "2024/09/12 20:30",
  },
  {
    id: 9,
    title: "LSI SAS3008 RAID卡固件升级",
    introduction:
      "本文是一篇关于LSI SAS3008 RAID卡固件升级的指南，介绍了使用sas3flash工具进行固件升级的步骤、常用参数以及注意事项，旨在帮助系统运维人员轻松完成固件升级工作，提升存储系统性能。",
    tag: [
      {
        id: 9,
        name: "系统运维",
        type: "x",
      },
    ],
    img: "/img/test/9.webp",
    date: "2024/08/12 21:10",
  },
  {
    id: 10,
    title: "基于FastGPT部署专属AI问答知识库",
    introduction:
      "FastGPT是一款开源的AI知识库构建平台，支持特定领域AI客服、自动化数据预处理、可视化工作流编排等功能。通过FastGPT，企业可以轻松构建专属AI客服和知识库，实现智能化客户服务，提升用户体验和运营效率。",
    tag: [
      {
        id: 10,
        name: "AGI分享",
        type: "g",
      },
    ],
    img: "/img/test/10.webp",
    date: "2024/07/21 09:56",
  },
];

export default function Page() {
  return (
    <div className="">
      <Banner />
      <div className="w-full mt-5 flex justify-between flex-wrap gap-4">
        {HomeList.map((item) => (
          <CardArticle
            className="basis-[calc(33.333%_-_1rem)]"
            key={item.id}
            {...item}
          />
        ))}
      </div>
      <div className="mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="/" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="/" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
