import { Contract } from 'ethers'

const AMOUNT: any = 50;

export async function mintTokens(
    token: Contract,
      owner: string
  ): Promise<string> {
    await token.mint(owner, AMOUNT)
    return await token.balanceOf(owner)
  }