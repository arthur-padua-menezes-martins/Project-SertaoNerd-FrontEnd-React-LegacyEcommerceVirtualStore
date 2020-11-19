/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import HeaderLogo from '../../Components/Logo/HeaderLogo.js'
import HeaderAccount from '../../Components/Account/Header/HeaderAccount.js'
import MobileHeaderProfile from '../../Components/Profile/MobileHeaderProfile.js'
import MobileHeaderCategories from '../../Components/Categories/MobileHeaderCategories.js'
import MobileHeaderCart from '../../Components/Cart/MobileHeaderCart.js'
import MobileHeaderSearch from '../../Components/Search/MobileHeaderSearch.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { StyledHeaderDefault, StyledHeaderDefaultMobile, StyledHeaderAccount } from './styles.js'

/*main function***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function HeaderMobile(props) {

    function Default() {
        return (
            <>
                <StyledHeaderDefault>
                    <HeaderLogo />
                </StyledHeaderDefault>

                <StyledHeaderDefaultMobile>
                    <MobileHeaderProfile />
                    <MobileHeaderCategories />
                    <MobileHeaderCart />
                    <MobileHeaderSearch />
                </StyledHeaderDefaultMobile>
            </>
        )
    }

    function Simple() {
        return (
            <StyledHeaderDefaultMobile>

            </StyledHeaderDefaultMobile>
        )
    }

    function Account() {
        return (
            <>
                <StyledHeaderAccount>
                    <HeaderLogo />
                    <HeaderAccount />
                </StyledHeaderAccount>

                <StyledHeaderDefaultMobile>
                    <MobileHeaderProfile />
                    <MobileHeaderCategories />
                    <MobileHeaderCart />
                    <MobileHeaderSearch />
                </StyledHeaderDefaultMobile>
            </>
        )
    }

    return (
        <>
            {props.Default && Default()}
            {props.Simple && Simple()}
            {props.Account && Account()}
        </>
    )
}
export default HeaderMobile