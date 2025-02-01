// Add a rule to block YouTube Shorts
chrome.declarativeNetRequest.updateDynamicRules(
    {
      addRules: [
        {
          id: 1,
          priority: 1,
          action: { type: "block" },
          condition: {
            urlFilter: "||youtube.com/shorts",
            resourceTypes: ["main_frame"],
          },
        },
      ],
      removeRuleIds: [1], // Remove any existing rule with the same ID
    },
    () => {
      console.log("YouTube Shorts blocking rule added!");
    }
  );