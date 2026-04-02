module.exports = {
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
      },
    },
  },
};
