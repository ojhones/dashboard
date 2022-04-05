import { useRouter } from 'next/router';

import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

export type PersonTypeProps =
  | ''
  | 'socios'
  | 'profissionais'
  | 'competidores'
  | undefined
  | string[]
  | string;

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
  const router = useRouter();

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

  useEffect(() => {
    if (router.query.filterType === 'pessoas') {
      if (router.query.typePerson !== '') {
        setCheckedPersonType(router.query.typePerson);

        if (
          router.query.isActive === 'true' &&
          checkedPersonStatus.active === false
        ) {
          setCheckedPersonStatus({
            ...checkedPersonStatus,
            active: true,
          });
        }

        if (
          router.query.isPending === 'true' &&
          checkedPersonStatus.pending === false
        ) {
          setCheckedPersonStatus({
            ...checkedPersonStatus,
            pending: true,
          });
        }

        if (
          router.query.isExpired === 'true' &&
          checkedPersonStatus.expired === false
        ) {
          setCheckedPersonStatus({
            ...checkedPersonStatus,
            expired: true,
          });
        }

        if (
          router.query.isActive === 'true' &&
          router.query.isPending === 'true' &&
          checkedPersonStatus.active === false &&
          checkedPersonStatus.pending === false
        ) {
          setCheckedPersonStatus({
            ...checkedPersonStatus,
            active: true,
            pending: true,
          });
        }

        if (
          router.query.isActive === 'true' &&
          router.query.isExpired === 'true' &&
          checkedPersonStatus.active === false &&
          checkedPersonStatus.expired === false
        ) {
          setCheckedPersonStatus({
            ...checkedPersonStatus,
            active: true,
            expired: true,
          });
        }

        if (
          router.query.isPending === 'true' &&
          router.query.isExpired === 'true' &&
          checkedPersonStatus.pending === false &&
          checkedPersonStatus.expired === false
        ) {
          setCheckedPersonStatus({
            ...checkedPersonStatus,
            pending: true,
            expired: true,
          });
        }

        if (
          router.query.isActive === 'true' &&
          router.query.isPending === 'true' &&
          router.query.isExpired === 'true' &&
          checkedPersonStatus.active === false &&
          checkedPersonStatus.pending === false &&
          checkedPersonStatus.expired === false
        ) {
          setCheckedPersonStatus({
            ...checkedPersonStatus,
            active: true,
            pending: true,
            expired: true,
          });
        }
      }
    }
  }, [
    checkedPersonStatus,
    router.query.filterType,
    router.query.isActive,
    router.query.isExpired,
    router.query.isPending,
    router.query.typePerson,
  ]);

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

    router.push({
      query: { filterType: router.query.filterType },
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
