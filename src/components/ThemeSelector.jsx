/* eslint-disable */
import React, { useState } from 'react'

import classes from '../utils/classes'

import allThemes from '../themes.json'

const ThemeSelector = ({ theme, onSelect }) => {
	const [collapsed, setCollapsed] = useState(true)

	const handleSelect = themeId => {
		onSelect(themeId)
		localStorage.setItem('theme', themeId)
	}

	return (
		<div
			className="theme-selector"
			onMouseEnter={() => setCollapsed(false)}
			onMouseLeave={() => setCollapsed(true)}
		>
			{allThemes
				.sort(a => a.id === theme)
				.map(({ id, iconColor }, index) => {
					return (
						<div
							key={id}
							className={classes([theme, collapsed && 'collapsed'])}
							style={{
								background: iconColor,
								top: `${index * 40}px`,
								zIndex: theme === id ? 1 : 0,
							}}
							onClick={() => handleSelect(id)}
						/>
					)
				})}
		</div>
	)
}

export default ThemeSelector
