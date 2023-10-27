import { translate } from "./translationUtils";

export function CountryBarcodes() {
  // Call the useTranslation hook inside the functional component

  const UnitedStateCode = () => {
    const unitedStateCode = [];
    for (let i = 100; i <= 139; i++) {
      unitedStateCode.push({
        code: i.toString(),
        name: translate("united_states"),
      });
    }
    return unitedStateCode;
  };

  const IsraelCode = () => {
    const israelCode = [];
    israelCode.push({
      code: "729",
      name: translate("israel"),
    });
    return israelCode;
  };

  const EgyptCode = () => {
    const egyptCode = [];
    egyptCode.push({
      code: "622",
      name: translate("egypt"),
    });
    return egyptCode;
  };

  const unitedStates = UnitedStateCode();
  const israel = IsraelCode();
  const egypt = EgyptCode();

  const codes = [...unitedStates, ...israel, ...egypt];

  return codes;
}

export default CountryBarcodes;
