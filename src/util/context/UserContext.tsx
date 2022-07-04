import { Settings } from "http2";
import {
  createContext,
  useState,
  FC,
  ReactElement,
  ReactNode,
  useMemo,
} from "react";

type UnitOfMeasurement = "imperial" | "metric" | "standard";

type SettingsObject = {
  weather: {
    units: UnitOfMeasurement;
    language: string;
  };
  theme: string;
};

interface Props {
  children: ReactNode | ReactNode[];
}

interface IUserContext {
  name: string;
  token: string;
  settings: SettingsObject;
  changeName: (newName: string) => void;
  updateToken: (newToken: string) => void;
  updateSettings: (newSettings: SettingsObject) => void;
}

const defaultState: IUserContext = {
  name: "",
  token: "",
  settings: {
    weather: {
      units: "imperial",
      language: "english",
    },
    theme: "light",
  },
  changeName: () => {},
  updateToken: () => {},
  updateSettings: () => {},
};

export const UserContext = createContext<IUserContext>(defaultState);

export const UserProvider: FC<Props> = ({ children }): ReactElement => {
  const [name, setName] = useState<string>(defaultState.name);
  const [token, setToken] = useState<string>(defaultState.token);
  const [settings, changeSettings] = useState<SettingsObject>(
    defaultState.settings
  );

  const changeName = (newName: string) => {
    setName(newName);
  };

  const updateToken = (newToken: string) => {
    setToken(newToken);
  };

  const updateSettings = (newSettings: SettingsObject) => {
    changeSettings(newSettings);
  };

  const value = useMemo(() => {
    return {
      name,
      token,
      settings,
      changeName,
      updateToken,
      updateSettings,
    };
  }, [name, token, settings]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
