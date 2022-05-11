export const getHeaderList = (pathname: string) => {
  switch (pathname) {
    case "/accounts":
      return [
        {
          name: "my account",
          path: "my-account",
        },
      ];
    case "/accounts-book":
      return [
        {
          name: "my contacts",
          path: "my-contacts",
        },
      ];
    case "/benefit":
      return [
        {
          name: "Work report",
          path: "work-report",
        },
        {
          name: "storage",
          path: "storage",
        },
      ];
    case "/explorer":
      return [
        {
          name: "chain info",
          path: "chain-info",
        },
        {
          name: "Block details",
          path: "block-details",
        },
        {
          name: "Forks",
          path: "forks",
        },
        {
          name: "tital storage",
          path: "total-storage",
        },
      ];
    case "Staking":
      return [
        {
          name: "Overview",
          path: "overview",
        },
        {
          name: "Waiting",
          path: "waiting",
        },
        {
          name: "Account actions",
          path: "account-actions",
        },
        {
          name: "Target",
          path: "target",
        },
        {
          name: "Payouts",
          path: "payouts",
        },
        {
          name: "Slashes",
          path: "slashes",
        },
        {
          name: "Guardian stats",
          path: "guardian-stats",
        },
      ];
    case "/chain-state":
      return [
        {
          name: "storage",
          path: "chain-storage",
        },
        {
          name: "contants",
          path: "contants",
        },
        {
          name: "Raw storage",
          path: "raw-storage",
        },
      ];
    case "/extrinsics":
      return [
        {
          name: "Submission",
          path: "submission",
        },
      ];
    case "/settings":
      return [
        {
          name: "General",
          path: "general",
        },
      ];
    default:
      return [
        {
          name: "my account",
          path: "my-account",
        },
      ];
  }
};
