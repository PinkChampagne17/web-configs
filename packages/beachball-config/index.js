// @ts-check

/**
 * @param {{ hash: string, repo: string, userOrOrg: string }} commit `{ commit: string, repo: string, userOrOrg: string }`
 * @returns {string} URL to the commit
 */
function buildCommitUrl({ hash, repo, userOrOrg }) {
	return `https://github.com/${userOrOrg}/${repo}/commit/${hash}`;
}

/**
 * @param {{ repo: string, userOrOrg: string }} options
 * @returns {import("beachball").BeachballConfig} config
 */
function buildBeachballConfig({ repo, userOrOrg }) {
	return {
		access: "public",
		branch: "main",
		changelog: {
			customRenderers: {
				// Original template: https://github.com/microsoft/beachball/blob/aefbc1ac37ee85961cc787133c827f1fd3925550/src/changelog/renderPackageChangelog.ts#L93
				async renderEntry(entry) {
					if (entry.author === "beachball") {
						return `- ${entry.comment}`;
					}
					const shortCommitHash = entry.commit.substring(0, 7);
					const commitUrl = buildCommitUrl({
						hash: entry.commit,
						repo,
						userOrOrg,
					});
					// Imitate GitHub's commit format https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#commit-shas
					return `- ${entry.comment} ([${shortCommitHash}](${commitUrl}))`;
				},
			},
		},
	};
}

module.exports = {
	buildBeachballConfig,
};
