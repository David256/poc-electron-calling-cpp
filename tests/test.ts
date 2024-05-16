import { expect, test } from '@playwright/test'

test('Find the title', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('heading', { name: 'PoC' })).toBeVisible()
})
