import {
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

type PersonTypeProps =
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

type PersonsFilter = {
  checkPersonStatusActive: boolean;
  checkedPersonType: PersonTypeProps;
  handleResetPersonFilters: () => void;
  checkedPersonStatus: PersonStatusProps;
  setCheckedPersonType: (props: SetStateAction<PersonTypeProps>) => void;
  setCheckedPersonStatus: (props: SetStateAction<PersonStatusProps>) => void;
};

const PersonsFilter = createContext({} as PersonsFilter);

const PersonsFilterProvider = ({ children }: PersonsFilterProps) => {
  const [checkedPersonType, setCheckedPersonType] = useState<PersonTypeProps>();

  console.log(checkedPersonType, 'checkedPersonType');

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
    setCheckedPersonType('');
    setCheckedPersonStatus({
      active: false,
      pending: false,
      expired: false,
    });
  }

  return (
    <PersonsFilter.Provider
      value={{
        checkedPersonType,
        checkedPersonStatus,
        setCheckedPersonType,
        setCheckedPersonStatus,
        checkPersonStatusActive,
        handleResetPersonFilters,
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
