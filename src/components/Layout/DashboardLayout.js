import { experimentalStyled } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar'
import DashboardSidebar from './DashboardSidebar'

const DashboardLayoutRoot = experimentalStyled('div')(({ theme }) => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	overflow: 'hidden',
	backgroundColor: theme.palette.background.default
}))

const DashboardLayoutWrapper = experimentalStyled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 auto',
	overflow: 'hidden',
	paddingTop: '64px',
	[theme.breakpoints.up('lg')]: {
		paddingLeft: '280px'
	}
}))

const DashboardLayoutContainer = experimentalStyled('div')({
	display: 'flex',
	flex: '1 1 auto',
	overflow: 'hidden'
})

const DashboardLayoutContent = experimentalStyled('div')({
	height: '100%',
	flex: '1 1 auto',
	overflow: 'auto',
	position: 'relative',
	WebkitOverflowScrolling: 'touch'
})

const DashboardLayout = () => {
	const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false)

	return (
		<DashboardLayoutRoot>
			<DashboardNavbar onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)} />
			<DashboardSidebar onMobileClose={() => setIsSidebarMobileOpen(false)} openMobile={isSidebarMobileOpen} />
			<DashboardLayoutWrapper>
				<DashboardLayoutContainer>
					<DashboardLayoutContent>
						<Outlet />
					</DashboardLayoutContent>
				</DashboardLayoutContainer>
			</DashboardLayoutWrapper>
		</DashboardLayoutRoot>
	)
}

export default DashboardLayout
