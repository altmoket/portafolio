import { HStack, Badge } from '@chakra-ui/react'
import Section from './Section'

const skills = [
  'TypeScript',
  'Node.js',
  'React',
  'PostgreSQL',
  'Docker',
  'GitHub Actions',
  'Python',
  'Common Lisp'
]

export function Skills() {
  return (
    <Section title="Stack">
      <HStack align="center" gap={3} wrap="wrap">
        {skills.map(skill => (
          <Badge
            key={skill}
            bg="#1e293b"
            color="#ffffff"
            border="1px solid #334155"
            px={3}
            py={2}
            borderRadius="full"
            fontSize="sm"
            _hover={{
              borderColor: '#00d9ff',
              color: '#00d9ff',
              transform: 'translateY(-2px)'
            }}
            transition="all 0.2s ease"
          >
            {skill}
          </Badge>
        ))}

      </HStack>
    </Section>
  )
}
