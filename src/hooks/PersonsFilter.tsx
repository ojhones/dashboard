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

type ProfessionalStatusProps = {
  accredited: boolean;
  pending: boolean;
  expired: boolean;
};

type PersonsFilterProps = {
  children?: ReactNode;
};

type TimeSocietyProps = Date | string | string[] | undefined;

type PersonsFilter = {
  state: string[];
  timeSociety: TimeSocietyProps;
  professionalFunctions: string[];
  checkPersonStatusActive: boolean;
  checkedPersonType: PersonTypeProps;
  handleResetPersonFilters: () => void;
  checkProfessionalStatusActive: boolean;
  checkedPersonStatus: PersonStatusProps;
  customTimeSocietyStart: TimeSocietyProps;
  customTimeSocietyFinish: TimeSocietyProps;
  checkedProfessionalStatus: ProfessionalStatusProps;
  setState: (props: SetStateAction<string[]>) => void;
  setTimeSociety: (props: SetStateAction<TimeSocietyProps>) => void;
  setProfessionalFunctions: (props: SetStateAction<string[]>) => void;
  setCheckedPersonType: (props: SetStateAction<PersonTypeProps>) => void;
  setCheckedPersonStatus: (props: SetStateAction<PersonStatusProps>) => void;
  setCustomTimeSocietyStart: (props: SetStateAction<TimeSocietyProps>) => void;
  setCustomTimeSocietyFinish: (props: SetStateAction<TimeSocietyProps>) => void;
  setCheckedProfessionalStatus: (
    props: SetStateAction<ProfessionalStatusProps>
  ) => void;
};

const PersonsFilter = createContext({} as PersonsFilter);

const PersonsFilterProvider = ({ children }: PersonsFilterProps) => {
  const router = useRouter();

  const [state, setState] = useState<string[]>([]);
  const [timeSociety, setTimeSociety] = useState<TimeSocietyProps>('');
  const [checkedPersonType, setCheckedPersonType] = useState<PersonTypeProps>();

  const [professionalFunctions, setProfessionalFunctions] = useState<string[]>(
    []
  );
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

  const [checkedProfessionalStatus, setCheckedProfessionalStatus] =
    useState<ProfessionalStatusProps>({
      accredited: false,
      pending: false,
      expired: false,
    });

  const checkPersonStatusActive = Object.values(checkedPersonStatus).some(
    (status) => !!status
  );

  const checkProfessionalStatusActive = Object.values(checkedPersonStatus).some(
    (status) => !!status
  );

  async function handleResetPersonFilters() {
    await router.push({
      query: {
        filterType: router.query.filterType,
      },
    });

    setState([]);
    setTimeSociety('');
    setCheckedPersonType('');
    setProfessionalFunctions([]);
    setCustomTimeSocietyStart('');
    setCustomTimeSocietyFinish('');

    setCheckedPersonStatus({
      active: false,
      pending: false,
      expired: false,
    });

    setCheckedProfessionalStatus({
      accredited: false,
      pending: false,
      expired: false,
    });
  }

  useEffect(() => {
    if (router.query.filterType === 'pessoas') {
      if (router.query.typePerson !== '') {
        setCheckedPersonType(router.query.typePerson);

        // Manipule query Status
        if (
          router.query.isactive === 'true' &&
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
          router.query.isactive === 'true' &&
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
          router.query.isactive === 'true' &&
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
          router.query.isactive === 'true' &&
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

        // Manipule query Time Society
        if (router.query.timeSociety !== '' && timeSociety === '') {
          setTimeSociety(router.query.timeSociety);
        }

        // Manipule query States
        if (!!router.query.UF && !state.length) {
          const formattedUFToArray = (router.query.UF as string).split('-');

          setState(formattedUFToArray);
        }
      }
    }
  }, [
    state,
    timeSociety,
    router.query.UF,
    checkedPersonStatus,
    router.query.isactive,
    router.query.isExpired,
    router.query.isPending,
    router.query.typePerson,
    router.query.filterType,
    router.query.timeSociety,
  ]);

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
        professionalFunctions,
        customTimeSocietyStart,
        setCheckedPersonStatus,
        customTimeSocietyFinish,
        checkPersonStatusActive,
        setProfessionalFunctions,
        handleResetPersonFilters,
        setCustomTimeSocietyStart,
        checkedProfessionalStatus,
        setCustomTimeSocietyFinish,
        setCheckedProfessionalStatus,
        checkProfessionalStatusActive,
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
