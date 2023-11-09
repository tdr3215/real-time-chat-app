import { Text, Link } from '@chakra-ui/react';

export const BG = () => {
  return (
    <>
      <Text>
        Image by{' '}
        <Link
          isExternal
          href="https://pixabay.com/users/lesiakower-25701529/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7728691"
        >
          Lesiakower
        </Link>{' '}
        from{' '}
        <Link
          isExternal
          href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7728691"
        >
          Pixabay
        </Link>
      </Text>
    </>
  );
};
