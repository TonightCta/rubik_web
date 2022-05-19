export const getHeaderList = (pathname: string) => {
  switch (pathname) {
    case "accounts":
      return {
        title: "Accounts",
        labelList: [
          {
            name: "My Account",
            path: "/",
          },
        ],
      };
    case "accounts-book":
      return {
        title: "Accounts book",
        labelList: [
          {
            name: "My Contacts",
            path: "/account-view/my-contacts",
          },
        ],
      };
    case "benefit":
      return {
        title: "Benefit",
        labelList: [
          {
            name: "Work report",
            path: "work-report",
          },
          {
            name: "storage",
            path: "storage",
          },
        ],
      };
    case "explorer":
      return {
        title: "Explorer",
        labelList: [
          {
            name: "Chain Info",
            path: "/explorer/chain-info",
          },
          {
            name: "Block details",
            path: "/explorer/block-details",
          },
          {
            name: "Forks",
            path: "/explorer/forks",
          },
          {
            name: "tital storage",
            path: "/explorer/total-storage",
          },
        ],
      };
    case "staking":
      return {
        title: "Staking",
        labelList: [
          {
            name: "Overview",
            path: "/staking/overview",
          },
          {
            name: "Waiting",
            path: "/staking/waiting",
          },
          {
            name: "Account actions",
            path: "/staking/account-actions",
          },
          {
            name: "Target",
            path: "/staking/target",
          },
          {
            name: "Payouts",
            path: "/staking/payouts",
          },
          {
            name: "Slashes",
            path: "/staking/slashes",
          },
          {
            name: "Guardian stats",
            path: "/staking/guardian-stats",
          },
        ],
      };
    case "chain-state":
      return {
        title: "Chain State",
        labelList: [
          {
            name: "Storage",
            path: "/chain-state/chain-storage",
          },
          {
            name: "Contants",
            path: "/chain-state/contants",
          },
          {
            name: "Raw storage",
            path: "/chain-state/raw-storage",
          },
        ],
      };
    case "extrinsics":
      return {
        title: "Extrinsics",
        labelList: [
          {
            name: "Submission",
            path: "/extrinsics/submission",
          },
        ],
      };
    case "settings":
      return {
        title: "Settings",
        labelList: [
          {
            name: "General",
            path: "/settings/general",
          },
        ],
      };
    default:
      return {
        title: "Accounts",
        labelList: [
          {
            name: "my account",
            path: "/account-view/my-account",
          },
        ],
      };
  }
};
