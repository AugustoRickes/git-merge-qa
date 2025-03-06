import { test, expect } from '@playwright/test';

test('Usuário consegue fazer login', async ({ page }) => {
    await page.goto('https://exemplo.com/login');
    await page.fill('input[name="email"]', 'teste@exemplo.com');
    await page.fill('input[name="password"]', 'senha123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://exemplo.com/dashboard');
});