import { createContext, useState } from "react";
import { getLocalStorage, isAuth } from "../utilities/helper";


export const AllContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(isAuth());
    const [userDetails, setUserDetails] = useState(isAuth());
    const [isLoading, setIsLoading] = useState(false);
    const [upgrageMembershipPlan, setUpgrageMembershipPlan] = useState([]);
    const [membershipPaymentData, setMembershipPaymentData] = useState([]);
    const [authError, setAuthError] = useState("");
    const [authSuccess, setAuthSuccess] = useState("");
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");
    const [contentItemContext, setContentItemContext] = useState({});
    const [contributeItemContext, setContributeItemContext] = useState({ contributeid: getLocalStorage("contributeItem"), });
    const [packageTotalWhileAdd, setPackageTotalWhileAdd] = useState(0);
    const [packageChargeTimeName, setPackageChargeTimeName] = useState([]);
    const [packageDataInfo, setPackageDataInfo] = useState([]);
    const [caseDetailsData, setCaseDetailsData] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState();
    const [subjectAreaPostData, setSubjectAreaPostData] = useState({ disputeResolutionList: [], featuredList: [], });

    const [searchData, setSearchData] = useState({})
    const [searchMultipleCities, setSearchMultipleCities] = useState([])
    const [searchMultipleDays, setSearchMultipleDays] = useState([])



    const contextInfo = {
        user,
        setUser,
        userDetails,
        setUserDetails,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
        token,
        isLoading,
        setIsLoading,
        authError,
        setAuthError,
        authSuccess,
        setAuthSuccess,
        admin,
        setAdmin,

        contentItemContext,
        setContentItemContext,

        upgrageMembershipPlan,
        setUpgrageMembershipPlan,
        packageTotalWhileAdd,
        setPackageTotalWhileAdd,

        membershipPaymentData,
        setMembershipPaymentData,
        packageChargeTimeName,
        setPackageChargeTimeName,

        contributeItemContext,
        setContributeItemContext,
        packageDataInfo,
        setPackageDataInfo,
        caseDetailsData,
        setCaseDetailsData,
        searchResult,
        setSearchResult,
        subjectAreaPostData,
        setSubjectAreaPostData,

        searchData,
        setSearchData,
        searchMultipleCities,
        setSearchMultipleCities,
        searchMultipleDays,
        setSearchMultipleDays,
    };

    return (
        <div>
            <AllContext.Provider value={contextInfo} >
                {children}
            </AllContext.Provider>
        </div>
    )
}

export default ContextProvider;