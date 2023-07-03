// @ts-nocheck
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// @ts-ignore
import authIcons from "../../images/auth-bg-icons.png";
// @ts-ignore
import sksolLogo from "../../images/sk-sol-logo.svg";
import { InputEmail } from "../../entities/InputEmail/InputEmail";
import { InputPassword } from "../../entities/InputPassword/InputPassword";
import { InputCheckbox } from "../../entities/InputCheckbox/InputCheckbox";
import { Trans } from "@lingui/macro";
import { useInputChange } from "../../shared/Hooks/useInputChange";
import { useCheckboxChange } from "../../shared/Hooks/useCheckboxChange";
import { Button } from "../../shared/UI/Button/Button";

import { useDispatch, useSelector } from "react-redux";
import { setAuthTrue } from "../../features/requireAuth/authSlice";
import { useNavigate } from "react-router-dom";
import { dynamicActivate } from "../../app/providers/with-lingui";
import withAuthLayout from "../../shared/UI/Layout/AuthLayout";
import { PATHS } from "../../app/constants/paths";

const AuthorizationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store.auth);

  const changeLanguagehandler = (lang) => {
    dynamicActivate(lang);
    localStorage.setItem("language", lang);
  };

  // URL of paths
  const urlLinkSupport: string = `mailto:support@tinda.ru`;
  const urlForgotPasswordPage: string = "/forgot-password";

  // Validation
  const [startValidate, setStartValidate] = useState(false);
  const [validationObj, setValidationObj] = useState({
    requiredPassword: true,
    requiredEmail: true,
  });

  const {
    value: emailValue,
    changeValueHandler: emailChangeValueHandler,
    setValue: setEmailValue,
  } = useInputChange("");

  const {
    value: passwordValue,
    changeValueHandler: passwordChangeValueHandler,
    setValue: setPasswordValue,
  } = useInputChange("");
  const {
    value: rememberChecked,
    changeValueHandler: rememberChangeCheckedHandler,
  } = useCheckboxChange(true);

  useEffect(() => {
    if (emailValue.trim() === "") {
      setValidationObj((v) => {
        return { ...v, requiredEmail: false };
      });
    } else {
      setValidationObj((v) => {
        return { ...v, requiredEmail: true };
      });
    }

    if (passwordValue.trim() === "") {
      setValidationObj((v) => {
        return { ...v, requiredPassword: false };
      });
    } else {
      setValidationObj((v) => {
        return { ...v, requiredPassword: true };
      });
    }
  }, [emailValue, passwordValue]);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setStartValidate(true);

    if (validationObj.requiredPassword && validationObj.requiredEmail) {
      console.log(`${passwordValue}, ${emailValue}`);
      setPasswordValue("");
      setEmailValue("");

      navigate(PATHS.CLIENTS);
      dispatch(setAuthTrue());
    }
  };

  return (
    <>
      <div className={"px-20 py-14 "}>
        <div className={"flex items-center gap-3"}>
          <img src={sksolLogo} />
          <h1 className={"text-violet-700 text-3xl font-semibold "}>SK Sol</h1>
        </div>
        <h1 className={"text-4xl font-semibold pt-20 pb-12"}>
          <Trans>Authorization</Trans>
        </h1>
        <form>
          <InputEmail
            id="email"
            name="email"
            required={true}
            value={emailValue}
            label={<Trans>Email</Trans>}
            labelClassName={"font-bold"}
            onChange={emailChangeValueHandler}
            errorMessage={
              startValidate && !validationObj.requiredEmail ? (
                <Trans>Required field</Trans>
              ) : undefined
            }
          />

          <InputPassword
            id="password"
            name="password"
            value={passwordValue}
            label={<Trans>Password</Trans>}
            labelClassName={"font-bold "}
            required={true}
            onChange={passwordChangeValueHandler}
            errorMessage={
              startValidate && !validationObj.requiredPassword ? (
                <Trans>Required field</Trans>
              ) : undefined
            }
          />

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <InputCheckbox
                id="remember_me"
                name="remember_me"
                label={<Trans>Remember me</Trans>}
                value="remember"
                checked={rememberChecked}
                onChange={rememberChangeCheckedHandler}
              />
            </div>
          </div>
          <Button
            auth={true}
            type={"submit"}
            label={<Trans>Log in</Trans>}
            buttonClassName={"bg-violet-700 w-full mt-3"}
            onClick={(e) => onSubmitHandler(e)}
          />
        </form>
        <div>
          <Trans values={{ urlLinkSupport }}>
            Have any questions?
            <a
              href={urlLinkSupport}
              className={`font-medium text-primary-700 hover:text-primary-500`}
            >
              Feel free to contact our support!
            </a>
          </Trans>
        </div>
      </div>
      <div>
        <hr />
        <div className={"flex flex-col items-start"}>
          <button onClick={() => changeLanguagehandler("ru")}>russian</button>
          <button onClick={() => changeLanguagehandler("en")}>english</button>
        </div>
      </div>
    </>
  );
};

export default withAuthLayout(AuthorizationPage);
