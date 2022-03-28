import {
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

type PersonTypeProps = 'socios' | 'profissionais' | 'competidores' | undefined;

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
  checkedPersonStatus: PersonStatusProps;
  setCheckedPersonType: (props: SetStateAction<PersonTypeProps>) => void;
  setCheckedPersonStatus: (props: SetStateAction<PersonStatusProps>) => void;
};

const PersonsFilter = createContext({} as PersonsFilter);

const PersonsFilterProvider = ({ children }: PersonsFilterProps) => {
  const [checkedPersonType, setCheckedPersonType] = useState<PersonTypeProps>();

  const [checkedPersonStatus, setCheckedPersonStatus] =
    useState<PersonStatusProps>({
      active: false,
      pending: false,
      expired: false,
    });

  const checkPersonStatusActive = Object.values(checkedPersonStatus).some(
    (status) => !!status
  );

  return (
    <PersonsFilter.Provider
      value={{
        checkedPersonType,
        checkedPersonStatus,
        setCheckedPersonType,
        setCheckedPersonStatus,
        checkPersonStatusActive,
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
