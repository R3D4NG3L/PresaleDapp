// Rainbow and Wagmi integration guide: https://billyjitsu.hashnode.dev/the-rainbowkit-wagmi-guide-i-wish-i-had
import
{
    useAccount,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";

export default function PresaleManager()
{
    const { address: useAccountAddress, connector: useAccountActiveConnector, isConnected: useAccountIsConnected } = useAccount()

    /**
     * @fn Log
     * @brief Log to console
     */
    function Log(stringToLog)
    {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        console.log(today.toUTCString() + " | " + stringToLog);
    }

    /**
    * @class Presale
    * @brief Presale Data
    */
    class Presale
    {
        constructor(presaleData)
        {
            this.preSaleDataLocal = presaleData;
            if (this.preSaleDataLocal)
            {
                var presaleSplit = presaleData.toString().split(",");
                var counter = 0;
                this.saleToken = presaleSplit[counter++];
                this.startTime = new Date(presaleSplit[counter++] * 1000);
                this.endTime = new Date(presaleSplit[counter++] * 1000);
                this.price = (presaleSplit[counter++] / (10 ** 18));
                this.tokensToSell = presaleSplit[counter++];
                this.presaleGoal = this.tokensToSell * this.price;
                this.baseDecimals = presaleSplit[counter++];
                this.inSale = presaleSplit[counter++];
                this.tokensSold = this.tokensToSell - this.inSale;
                this.vestingStartTime = new Date(presaleSplit[counter++] * 1000);
                this.vestingCliff = presaleSplit[counter++];
                this.vestingPeriod = presaleSplit[counter++];
                this.enableBuyWithEth = Boolean(parseInt(presaleSplit[counter++]));
                this.enableBuyWithUsdt = Boolean(parseInt(presaleSplit[counter++]));
            }
        }

        get HtmlOutput()
        {
            if (this.preSaleDataLocal)
            {
                return (
                    <>
                        <p>Sale Token: {this.saleToken}</p>
                        <p>startTime: {this.startTime.toLocaleString("default")}</p>
                        <p>endTime: {this.endTime.toLocaleString("default")}</p>
                        <p>price: {this.price.toFixed(3)}$ per Praiza</p>
                        <p>tokensToSell: {new Intl.NumberFormat().format(this.tokensToSell)} Praiza</p>
                        <p>inSale: {new Intl.NumberFormat().format(this.inSale)} Praiza</p>
                        <p>tokensSold: {new Intl.NumberFormat().format(this.tokensSold)} Praiza</p>
                        <p>presaleGoal: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(this.presaleGoal)} $</p>
                        <p>baseDecimals: {this.baseDecimals}</p>
                        <p>vestingStartTime: {this.vestingStartTime.toLocaleString("default")}</p>
                        <p>vestingCliff: {this.vestingCliff}</p>
                        <p>vestingPeriod: {this.vestingPeriod}</p>
                        <p>enableBuyWithEth: {this.enableBuyWithEth.toString()}</p>
                        <p>enableBuyWithUsdt: {this.enableBuyWithUsdt.toString()}</p>
                    </>
                )
            }
            else return (<></>);
        }
    }

    /**
* @class UserVesting
* @brief User Vesting Data
*/
    class UserVesting
    {
        constructor(userVestingData)
        {
            this.userVestingDataLocal = userVestingData;
            if (userVestingData)
            {
                var userVestingSplit = userVestingData.toString().split(",");
                var counter = 0;
                this.totalAmount = userVestingSplit[counter++] / (10 ** 18);
                this.claimedAmount = userVestingSplit[counter++];
                this.claimStart = new Date(userVestingSplit[counter++] * 1000);
                this.claimEnd = new Date(userVestingSplit[counter++] * 1000);
            }
        }

        get HtmlOutput()
        {
            if (this.userVestingDataLocal)
            {
                return (
                    <>
                        <p>totalAmount: {new Intl.NumberFormat().format(this.totalAmount)} Praiza</p>
                        <p>claimedAmount: {new Intl.NumberFormat().format(this.claimedAmount)} Praiza</p>
                        <p>claimStart: {this.claimStart.toLocaleString("default")}</p>
                        <p>claimEnd: {this.claimEnd.toLocaleString("default")}</p>
                    </>
                )
            }
            else
            {
                return (<></>);
            }
        }
    }

    /*!
    * @fn printPresaleData
    * @brief Print Presale Data
    */
    function printPresaleData(presaleData)
    {
        var preSale = new Presale(presaleData);
        setPresaleDataParsed(preSale.HtmlOutput);
    }

    /*!
    * @fn printUserVestingData
    * @brief Print User Vesting Data
    */
    function printUserVestingData(userVestingData)
    {
        var userVesting = new UserVesting(userVestingData);
        setUserVestingParsed(userVesting.HtmlOutput);
    }

    /* User Vesting */
    const [userVestingParsed, setUserVestingParsed] = useState(0);
    const { data: userVestingData,
        error: userVestingDataError,
        isError: userVestingDataIsError,
        isLoading: userVestingDataIsLoading
    } = useContractRead({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
        abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
        functionName: "userVesting",
        args: [useAccountAddress, process.env.NEXT_PUBLIC_PRESALE_ID],
        watch: false,
    });

    /* Presale Data */
    const [presaleDataParsed, setPresaleDataParsed] = useState(0);
    const { data: presaleData,
        error: presesaleDataError,
        isError: presesaleIsError,
        isLoading: presesaleIsLoading,
        status: presesaleStatus } = useContractRead({
            address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
            abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
            functionName: "presale",
            args: [process.env.NEXT_PUBLIC_PRESALE_ID],
            watch: false,
        });

    /* ------------------- */

    /* USDT Interface Contract Address */
    const { data: usdtContractAddress } = useContractRead({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
        abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
        functionName: "USDTInterface",
        watch: false,
    });
    /* ------------------- */

    /* Wallet Connected / Disconnected */
    useEffect(() =>
    {
        Log("---> useAccountIsConnected: " + useAccountIsConnected);
        Log("---> presaleData: " + presaleData);
        Log("---> presesaleDataError: " + presesaleDataError);
        Log("---> presesaleIsError: " + presesaleIsError);
        Log("---> userVestingData: " + userVestingData);
        Log("---> process.env.NEXT_PUBLIC_PRESALE_ID: " + process.env.NEXT_PUBLIC_PRESALE_ID);
        if (useAccountIsConnected)
        {
            printPresaleData(presaleData);
            printUserVestingData(userVestingData);
        }
        else
        {
            setPresaleDataParsed("");
        }
    }, [useAccountActiveConnector,
        useAccountIsConnected,
        presaleData,
        presesaleDataError,
        presesaleIsError,
        userVestingData]);

    /* ------------------- */
    /* Buy with USDT */
    const [tokens = 10000, setTokens] = useState();
    const [usdt, setUsdt] = useState(0);
    const { data: buyWithUsdtConfig,
        error: buyWithUsdtPrepareError,
        isError: buyWithUsdtIsPrepareError,
        status: buyWithUsdtPrepareStatus } = usePrepareContractWrite({
            address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
            abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
            functionName: 'buyWithUSDT',
            args: [process.env.NEXT_PUBLIC_PRESALE_ID, tokens],
            enabled: useAccountIsConnected,
        });
    const {
        data: buyWithUsdtData,
        write: buyWithUsdt,
        isLoading: isBuyWithUsdtLoading,
        isSuccess: isBuyWithUsdtStarted,
        isError: isBuyWithUsdtError,
        error: buyWithUsdtError,
    } = useContractWrite(buyWithUsdtConfig);
    const {
        isLoading: waitForTransactionIsLoading,
        isSuccess: waitForTransactionIsSuccess
    } = useWaitForTransaction({
        hash: buyWithUsdtData?.hash,
    });
    useEffect(() =>
    {
        if (!presaleData)
            return;
        var presale = new Presale(presaleData);
        var usdtValue = tokens * presale.price;
        Log("Buy with USDT - Tokens: " + tokens + " - UsdtValue: " + usdtValue);
        setUsdt(usdtValue);
    }, [tokens, presaleData]);
    /* --------- */

    /* USDT Buy Helper */
    const { data: usdtAllowanceHelper } = useContractRead({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
        abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
        functionName: "usdtBuyHelper",
        args: [process.env.NEXT_PUBLIC_PRESALE_ID, tokens],
        watch: false,
    });
    /* USDT Allowance */
    const [accountAllowancePublic, setAccountAllowance] = useState();
    const {
        data: accountAllowance,
        error: accountAllowanceError,
        isError: accountAllowanceIsError,
        isLoading: accountAllowanceIsLoading } = useContractRead({
            address: usdtContractAddress,
            abi: process.env.NEXT_PUBLIC_STABLE_COIN_CONTRACT_ABI,
            functionName: "allowance",
            args: [useAccountAddress, process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString()],
            watch: false,
        });

    useEffect(() =>
    {
        Log("----> accountAllowance: " + accountAllowance);
        Log("----> accountAllowanceError: " + accountAllowanceError);
        Log("----> accountAllowanceIsError: " + accountAllowanceIsError);
        Log("----> process.env.NEXT_PUBLIC_CHAIN_ID: " + process.env.NEXT_PUBLIC_CHAIN_ID);
        if (accountAllowance)
            setAccountAllowance(accountAllowance.toString());
    }, [accountAllowance, accountAllowanceError, accountAllowanceIsError]);

    const { data: usdtAllowanceConfig,
        error: usdtAllowancePrepareError,
        isError: usdtAllowanceIsPrepareError, } = usePrepareContractWrite({
            address: usdtContractAddress,
            abi: process.env.NEXT_PUBLIC_STABLE_COIN_CONTRACT_ABI,
            functionName: 'approve',
            chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID),
            // USDT has 6 decimals
            args: [process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(), usdtAllowanceHelper],
            enabled: useAccountIsConnected,
        });
    const {
        data: usdtAllowanceData,
        write: usdtAllowanceWrite,
        isLoading: usdtAllowanceIsLoading,
        isSuccess: usdtAllowanceIsSuccess,
        error: usdtAllowanceError,
    } = useContractWrite(usdtAllowanceConfig);
    const {
        isLoading: waitForTransactionUsdtAllowanceIsLoading,
        isSuccess: waitForTransactionUsdtAllowanceIsSuccess
    } = useWaitForTransaction({
        hash: usdtAllowanceData?.hash,
    });
    useEffect(() =>
    {
        Log("---> waitForTransactionUsdtAllowanceIsSuccess:" + waitForTransactionUsdtAllowanceIsSuccess)
        // Once allowance has been confirmed, buy tokens with USDT
        buyWithUsdt?.()
    }, [waitForTransactionUsdtAllowanceIsSuccess]);

    const renderContent = () =>
    {
        return (
            <>
                <section className="parallaxOne" data-parallax="scroll" data-image-src="images/bg/20.jpg" data-bleed="10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="chooseUsContent home_page3">
                                    <h3 className="magenta normal">Purchase Praiza Pre-Sale Tokens:</h3>
                                    <form
                                        onSubmit={(e) =>
                                        {
                                            e.preventDefault();
                                            if (accountAllowancePublic >= usdtAllowanceHelper)
                                                buyWithUsdt?.();
                                            else
                                                usdtAllowanceWrite?.()
                                        }}>
                                        <label for="tokenId">Amount of Praiza Tokens</label>
                                        <input
                                            type="number"
                                            placeholder="Amount of Praiza Tokens"
                                            className="exchange__textBox"
                                            value={tokens}
                                            onChange={(e) => setTokens(e.target.value)}
                                        />
                                        <div>USDT equivalent: {usdt.toFixed(2)}</div>
                                        <button disabled={waitForTransactionIsLoading || usdtAllowanceIsLoading}>
                                            {
                                                waitForTransactionIsLoading ? 'Investment in progress...'
                                                    : waitForTransactionUsdtAllowanceIsLoading ? 'Awaiting USDT Allowance...'
                                                        : 'Buy Praiza'
                                            }
                                        </button>
                                        {waitForTransactionIsSuccess && (
                                            <div>
                                                Successfully invested in Praiza! Congratulations!
                                                <div>
                                                    <a href={`https://etherscan.io/tx/${usdtAllowanceData?.hash}`}>Etherscan</a>
                                                </div>
                                            </div>
                                        )}
                                        {<>
                                            <p><b>buyWithUsdtPrepareStatus: </b>{buyWithUsdtPrepareStatus}</p>
                                            <p><b>accountAllowancePublic: </b>{accountAllowancePublic}</p>
                                        </>}
                                        {(usdtAllowanceIsPrepareError || usdtAllowanceError) && (
                                            <>
                                                <div><b>USDT Allowance Error:</b> {(usdtAllowancePrepareError || usdtAllowanceError)?.message}</div><br /><br />
                                            </>
                                        )}
                                        {(buyWithUsdtIsPrepareError) && (
                                            <div><b>buyWithUsdtIsPrepareError</b> {buyWithUsdtPrepareError?.message}</div>
                                        )}
                                        {(isBuyWithUsdtError) && (
                                            <div><b>isBuyWithUsdtError:</b> {buyWithUsdtError?.message}</div>
                                        )}
                                        {(accountAllowanceIsError) && (
                                            <div><b>accountAllowanceIsError:</b> {accountAllowanceError?.message}</div>
                                        )}
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="chooseUsContent home_page3">
                                    <h3 className="magenta normal">User Vesting Data:</h3>
                                    <p>{userVestingParsed}</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="chooseUsContent home_page3">
                                    <h3 className="magenta normal">Presale Data:</h3>
                                    <p>{presaleDataParsed}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    };

    return (
        <>
            {renderContent()}
        </>
    )
}
