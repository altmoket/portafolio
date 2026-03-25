import { Text, Badge, VStack, HStack, Button, Center, SimpleGrid, Dialog } from '@chakra-ui/react'
import type { Project } from '../types/proyect'

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onClose: () => void
  colors: any
}

export function ProjectModal({ project, open, onClose, colors }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()} placement={'center'}>
      <Dialog.Backdrop backdropFilter="blur(4px)"/>

      <Dialog.Positioner>
        <Dialog.Content
          bg={colors.bgCard}
          border="1px solid"
          borderColor={colors.border}
          boxShadow="0 20px 60px rgba(0,0,0,0.3)"
          maxW="900px"
          borderRadius="12px"
        >
          <Dialog.Header>
            <Dialog.Title style={{ color: colors.text }}>
              {project.title}
            </Dialog.Title>
          </Dialog.Header>

          <Dialog.CloseTrigger />

          <Dialog.Body>
            <VStack gap={6} align="start">
              {/* Images */}
              {project.images && project.images.length > 0 && (
                <SimpleGrid columns={{ base: 2, md: 3 }} gap={3}>
                  {project.images.map((image, idx) => (
                    <Center
                      key={idx}
                      h="120px"
                      bg={colors.bgCardHover}
                      borderRadius="8px"
                      overflow="hidden"
                    >
                      <img
                        src={image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Center>
                  ))}
                </SimpleGrid>
              )}

              <Text color={colors.text}>{project.description}</Text>

              <HStack wrap="wrap">
                {project.tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </HStack>
            </VStack>
          </Dialog.Body>

          <Dialog.Footer>
            <HStack>
              {project.live && (
                <a href={project.live} target="_blank">
                  <Button size="sm" variant="outline">Live</Button>
                </a>
              )}
              <a href={project.github} target="_blank">
                <Button size="sm">Code</Button>
              </a>
            </HStack>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
