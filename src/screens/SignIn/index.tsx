import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import {
  Box,
  Center,
  Heading,
  Input,
  VStack,
  FormControl,
  Icon,
  Button,
  Checkbox,
  HStack,
  Avatar,
  WarningOutlineIcon,
  Switch,
  Text,
  useColorMode
} from 'native-base'

export function SignIn() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center
      height="full"
      _dark={{bg: "black"}}
      _light={{bg: "white"}}
    >
      <VStack width="full" p={5}>

        <Avatar
          alignSelf="center"
          mb={4} bg="cyan.600"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }}
          size="xl"
        />

        <Box width="full">
          <Heading
            alignSelf="center"
            color={"fuchsia.650"}
            mb={3}
            _dark={{ color: "white" }}
            _light={{ color: "black" }}
          >
            Bem-vindo, faça seu login
          </Heading>

          <FormControl isInvalid>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              placeholder="Seu@email.com.br"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml={2}
                  color="cyan.700"
                />
              }
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" ml={1} />}
            >
              Email inválido
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              placeholder="Sua senha"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml={2}
                  color="cyan.700"
                />
              }
            />
          </FormControl>

          <Button
            mt="5"
            colorScheme="blue"
            alignSelf="center"
            width="full"
          >
            Entrar
          </Button>
        </Box>

        <HStack mt={3} alignSelf="center">
          <Checkbox value="agree">
            Concordo com os termos e política
          </Checkbox>
        </HStack>

        <HStack alignItems="center" alignSelf="center">
          <Text mr={1}>Dark</Text>
          <Switch
            isChecked={colorMode === "light"}
            onToggle={toggleColorMode}
            aria-label={
              colorMode === "light" ? "Troque para o tema escuro" : "Troque para o tema claro"
            }
          />
          <Text>Light</Text>
        </HStack>

      </VStack>
    </Center>
  )
}