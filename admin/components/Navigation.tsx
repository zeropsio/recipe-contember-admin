import * as React from 'react'
import { Menu } from '@contember/admin'

export const Navigation = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title="Dashboard" to="index" />
			<Menu.Item title="Articles" to="articles" />
			<Menu.Item title="Create new article" to="articleNew" />
		</Menu.Item>
	</Menu>
)
