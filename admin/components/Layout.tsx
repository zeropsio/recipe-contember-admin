import * as React from 'react'
import { ReactNode } from 'react'
import { Layout as ContemberLayout } from '@contember/admin'
import { Navigation } from './Navigation'

export const Layout = (props: { children?: ReactNode }) => (
	<ContemberLayout
		sidebarHeader="recipe-contember-admin"
		navigation={<Navigation />}
		children={props.children}
	/>
)
