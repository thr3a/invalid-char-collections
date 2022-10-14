import { CopyButton, Button, TextInput, Text, Anchor, Grid } from '@mantine/core';
import { charProps } from '@/features/char/charProps';
export const CharViewer = ({char, description, url}: charProps) => {
  return (
    <>
      <Text size="lg">{description}</Text>
      <Anchor href={url} target="_blank">
        {url}
      </Anchor>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            value={char}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <CopyButton value={char}>
            {({ copied, copy }) => (
              <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                {copied ? 'コピーしました' : 'クリップボードにコピー'}
              </Button>
            )}
          </CopyButton>
        </Grid.Col>
      </Grid>
    </>
  );
};
