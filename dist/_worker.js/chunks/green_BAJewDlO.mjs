globalThis.process ??= {}; globalThis.process.env ??= {};
const redHorse = new Proxy({"src":"/_astro/red.DQx7QFHi.png","width":113,"height":214,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kusum/Documents/projects/ludo/src/assets/horses/red.png";
							}
							
							return target[name];
						}
					});

const blueHorse = new Proxy({"src":"/_astro/blue.D4qQBM5X.png","width":115,"height":206,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kusum/Documents/projects/ludo/src/assets/horses/blue.png";
							}
							
							return target[name];
						}
					});

const yellowHorse = new Proxy({"src":"/_astro/yellow.BqBxYPOl.png","width":114,"height":203,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kusum/Documents/projects/ludo/src/assets/horses/yellow.png";
							}
							
							return target[name];
						}
					});

const greenHorse = new Proxy({"src":"/_astro/green.CQSVKFX5.png","width":115,"height":206,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kusum/Documents/projects/ludo/src/assets/horses/green.png";
							}
							
							return target[name];
						}
					});

export { blueHorse as b, greenHorse as g, redHorse as r, yellowHorse as y };
