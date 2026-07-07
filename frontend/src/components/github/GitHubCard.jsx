const username = "YOUR_GITHUB_USERNAME";

const GitHubCard = () => {
  return (
    <div className="space-y-8 mt-20">

      {/* GitHub Stats */}

      <img
        className="w-full rounded-3xl border border-slate-700"
        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`}
        alt="GitHub Stats"
      />

      {/* Streak */}

      <img
        className="w-full rounded-3xl border border-slate-700"
        src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`}
        alt="GitHub Streak"
      />

      {/* Languages */}

      <img
        className="w-full rounded-3xl border border-slate-700"
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
        alt="Top Languages"
      />

    </div>
  );
};

export default GitHubCard;