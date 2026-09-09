import React, { useId } from 'react';

/**
 * Subtle animated representation of a web-application architecture:
 * glowing client / API / server / database nodes wired together with
 * paths that carry travelling "data packets". Pure SVG + SMIL so it is
 * cheap to render and needs no animation library.
 *
 * Rendered behind hero / stack content — pointer-events-none, low opacity.
 */
const NODES = [
    { id: 'client', cx: 70, cy: 80, r: 13, color: '#38bdf8' },   // browser / user
    { id: 'react', cx: 150, cy: 300, r: 15, color: '#61DAFB' },  // react frontend
    { id: 'express', cx: 690, cy: 110, r: 14, color: '#a5b4fc' },// express api
    { id: 'node', cx: 740, cy: 340, r: 15, color: '#8CC84B' },   // node server
    { id: 'mongo', cx: 630, cy: 510, r: 16, color: '#4DB33D' },  // mongodb
];

const LINKS = [
    ['client', 'react'],
    ['react', 'express'],
    ['express', 'node'],
    ['node', 'mongo'],
    ['react', 'node'],
];

const nodeById = Object.fromEntries(NODES.map((n) => [n.id, n]));

const MernBackground = ({ className = '' }) => {
    const raw = useId();
    const uid = raw.replace(/[:]/g, ''); // keep ids valid for url(#...) refs

    return (
        <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
            {/* faint dev grid */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)',
                    backgroundSize: '46px 46px',
                    maskImage: 'radial-gradient(ellipse at 50% 40%, #000 30%, transparent 78%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, #000 30%, transparent 78%)',
                }}
            />

            <svg
                className="absolute inset-0 h-full w-full opacity-45"
                viewBox="0 0 800 560"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
            >
                <defs>
                    <filter id={`${uid}-glow`} x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="4" result="b" />
                        <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    {NODES.map((n) => (
                        <radialGradient id={`${uid}-${n.id}`} key={n.id}>
                            <stop offset="0%" stopColor={n.color} stopOpacity="0.9" />
                            <stop offset="100%" stopColor={n.color} stopOpacity="0.05" />
                        </radialGradient>
                    ))}
                </defs>

                {/* connections + travelling packets */}
                {LINKS.map(([a, b], i) => {
                    const from = nodeById[a];
                    const to = nodeById[b];
                    const d = `M ${from.cx} ${from.cy} L ${to.cx} ${to.cy}`;
                    return (
                        <g key={`${a}-${b}`}>
                            <path
                                id={`${uid}-path-${i}`}
                                d={d}
                                stroke="rgba(129,140,248,0.28)"
                                strokeWidth="1.5"
                                strokeDasharray="5 7"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    from="0"
                                    to="-48"
                                    dur={`${3 + i * 0.6}s`}
                                    repeatCount="indefinite"
                                />
                            </path>
                            <circle r="3.5" fill="#c7d2fe" filter={`url(#${uid}-glow)`}>
                                <animateMotion
                                    dur={`${3.2 + i * 0.7}s`}
                                    begin={`${i * 0.5}s`}
                                    repeatCount="indefinite"
                                >
                                    <mpath href={`#${uid}-path-${i}`} />
                                </animateMotion>
                            </circle>
                        </g>
                    );
                })}

                {/* nodes */}
                {NODES.map((n) => (
                    <g key={n.id} filter={`url(#${uid}-glow)`}>
                        <circle cx={n.cx} cy={n.cy} r={n.r * 1.6} fill={`url(#${uid}-${n.id})`}>
                            <animate
                                attributeName="opacity"
                                values="0.18;0.45;0.18"
                                dur="4s"
                                repeatCount="indefinite"
                            />
                        </circle>
                        <circle cx={n.cx} cy={n.cy} r={n.r} fill="#0f172a" stroke={n.color} strokeWidth="1.5" />
                        <circle cx={n.cx} cy={n.cy} r={n.r / 2.8} fill={n.color} />
                    </g>
                ))}
            </svg>

            {/* colour wash */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(77,179,61,0.07),transparent_40%)]" />
        </div>
    );
};

export default MernBackground;
