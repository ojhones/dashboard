import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Button } from '~/components';

import * as S from '~/styles/pages/relatorios/pessoas.styles';

export default function Administrative() {
  const [filterType, setFilterType] = useState('');

  return (
    <S.Container>
      <S.Wrapper>
        <h2>Relatórios</h2>

        <S.WrapperType>
          <Button
            size="md"
            title="Sócios"
            onClick={() => setFilterType('socios')}
          />
          <Button
            size="md"
            title="Competidores"
            onClick={() => setFilterType('competidores')}
          />
          <Button
            size="md"
            title="Profissionais"
            onClick={() => setFilterType('profissionais')}
          />
        </S.WrapperType>

        {/* <C.Select
          bg="white"
          size="md"
          maxWidth="20rem"
          placeholder="Tipo de Relatório"
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="socios">Sócios</option>
          <option value="competidores">Competidores</option>
          <option value="profissionais">Profissionais</option>
          <option value="associacoes">Associações</option>
          <option value="inscricoes">Inscrições</option>
          <option value="eventos">Calendario de Eventos</option>
          <option value="provas">Provas</option>
          <option value="resultados">Resultados</option>
          <option value="administativo">Administrativo</option>
        </C.Select> */}

        {filterType && (
          <S.WrapperFilters>
            <S.WrapperOptions>
              {filterType === 'socios' && <h2> Sócios</h2>}

              {filterType === 'competidores' && <h2> Competidores</h2>}

              {filterType === 'profissionais' && <h2> Profissionais</h2>}
            </S.WrapperOptions>

            <S.WrapperSearch>
              {filterType && (
                <Button size="md" title="Buscar" rightIcon={<FiSearch />} />
              )}
            </S.WrapperSearch>
          </S.WrapperFilters>
        )}

        <S.Content>
          {/* <h2>Conteúdo</h2> */}

          {!filterType && (
            <S.WrapperImageDefault>
              <span>Selecione um tipo de relatório para iniciar.</span>
              <S.ImageDefault
                alt="Logo no next js"
                fallbackSrc="/images/svg/search.svg"
                src="/images/svg/search.svg"
              />
            </S.WrapperImageDefault>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
