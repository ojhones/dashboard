// import { useRouter } from 'next/router';

import {
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

export type PersonTypeProps =
  | ''
  | 'socios'
  | 'profissionais'
  | 'competidores'
  | undefined;

type PersonStatusProps = {
  active: boolean;
  pending: boolean;
  expired: boolean;
};

type PersonsFilterProps = {
  children?: ReactNode;
};

type TimeSocietyProps = Date | undefined | string;

type PersonsFilter = {
  state: string;
  timeSociety: TimeSocietyProps;
  checkPersonStatusActive: boolean;
  checkedPersonType: PersonTypeProps;
  handleResetPersonFilters: () => void;
  checkedPersonStatus: PersonStatusProps;
  customTimeSocietyStart: TimeSocietyProps;
  customTimeSocietyFinish: TimeSocietyProps;
  setState: (props: SetStateAction<string>) => void;
  setTimeSociety: (props: SetStateAction<TimeSocietyProps>) => void;
  setCheckedPersonType: (props: SetStateAction<PersonTypeProps>) => void;
  setCheckedPersonStatus: (props: SetStateAction<PersonStatusProps>) => void;
  setCustomTimeSocietyStart: (props: SetStateAction<TimeSocietyProps>) => void;
  setCustomTimeSocietyFinish: (props: SetStateAction<TimeSocietyProps>) => void;
};

const PersonsFilter = createContext({} as PersonsFilter);

const PersonsFilterProvider = ({ children }: PersonsFilterProps) => {
  // const router = useRouter();

  const [state, setState] = useState<string>('');
  const [timeSociety, setTimeSociety] = useState<TimeSocietyProps>('');
  const [checkedPersonType, setCheckedPersonType] = useState<PersonTypeProps>();

  const [customTimeSocietyStart, setCustomTimeSocietyStart] =
    useState<TimeSocietyProps>('');
  const [customTimeSocietyFinish, setCustomTimeSocietyFinish] =
    useState<TimeSocietyProps>('');

  const [checkedPersonStatus, setCheckedPersonStatus] =
    useState<PersonStatusProps>({
      active: false,
      pending: false,
      expired: false,
    });

  const checkPersonStatusActive = Object.values(checkedPersonStatus).some(
    (status) => !!status
  );

  function handleResetPersonFilters() {
    setState('');
    setTimeSociety('');
    setCheckedPersonType('');
    setCustomTimeSocietyStart('');
    setCustomTimeSocietyFinish('');
    setCheckedPersonStatus({
      active: false,
      pending: false,
      expired: false,
    });
  }

  return (
    <PersonsFilter.Provider
      value={{
        state,
        setState,
        timeSociety,
        setTimeSociety,
        checkedPersonType,
        checkedPersonStatus,
        setCheckedPersonType,
        customTimeSocietyStart,
        setCheckedPersonStatus,
        customTimeSocietyFinish,
        checkPersonStatusActive,
        handleResetPersonFilters,
        setCustomTimeSocietyStart,
        setCustomTimeSocietyFinish,
      }}
    >
      {children}
    </PersonsFilter.Provider>
  );
};

function usePersonsFilter() {
  const context = useContext(PersonsFilter);

  if (!context) {
    throw new Error(
      'Persons Filter must exist to use filter persons on reports page'
    );
  }

  return context;
}

export { PersonsFilterProvider, usePersonsFilter };
