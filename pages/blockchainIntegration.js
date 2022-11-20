// Rainbow and Wagmi integration guide: https://billyjitsu.hashnode.dev/the-rainbowkit-wagmi-guide-i-wish-i-had
import { ConnectButton } from '@rainbow-me/rainbowkit';
import PresaleManager from "./utils/PresaleManager.js"

export default function blockchainIntegration()
{
    const renderContent = () =>
    {
        return (
            <>
                <ConnectButton /><br />
                <PresaleManager /><br />
            </>
        );
    };

    return (
        <>
            {renderContent()}
        </>
    )
}
