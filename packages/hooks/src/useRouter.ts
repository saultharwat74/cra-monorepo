import { useMemo } from "react";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import queryString from "query-string";
export const useRouter = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const params = useParams();
  const location = useLocation();
  const {
    location: { state },
  } = history;
  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      } as {
        branch_id: string;
        isGiftsModalOpen: boolean;
        isAddressModalOpen: boolean;
        isModifiersGroupsOpen: boolean;
        isAddPromoModalOpen: boolean;
        district_id: string;
        store_id: string;
        city_id: string;
        country_code: string;
        token: string;
        order_id: string;
        requires_support: string | null;
        isEditing: boolean;
        qr_branch_id: string;
        success: string;
        table: string;
      },
      match,
      location,
      history,
      historyState: history?.location?.state
        ? { hasSubdistricts: false }
        : (state as { hasSubdistricts: boolean }),
    };
  }, [location, history, match, params]);
};
