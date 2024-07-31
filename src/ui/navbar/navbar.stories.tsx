import { Meta, StoryObj } from '@storybook/react'

import Navbar, { NavbarSkeleton } from '.'

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: {}
}

type Story = StoryObj<typeof Navbar>

export const Primary: Story = {
  args: {}
}

export const Skeleton: Story = {
  render: () => <NavbarSkeleton />,
  args: {}
}

export default meta
