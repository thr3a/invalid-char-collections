import type { NextPage, InferGetStaticPropsType } from 'next';
import { CharViewer } from '@/features/char/components/CharViewer';
import fsPromises from 'fs/promises';
import glob from "fast-glob";
import type { charProps } from '@/features/char/charProps';
import { Space } from '@mantine/core';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({chars}) => {
  return (
    <>
      {chars.map( (item, index) => {
        return(
          <>
            <CharViewer key={index} {...item}></CharViewer>
            <Space h="md"></Space>
          </>
        );
      })}    
    </>
  );
};

export const getStaticProps = async () => {
  const files = glob.sync('src/data/*.json');
  const list: charProps[] = [];

  for (const filepath of files) {
    const text = await fsPromises.readFile(filepath, { encoding: 'utf8' });
    const json = JSON.parse(text) as charProps;
    list.push(json);
  }
  return {
    props: {
      chars: list
    }
  };
};

export default Home;
